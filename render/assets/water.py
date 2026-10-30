from PIL import Image; import numpy as np
src=__import__('os').path.join(__import__('os').path.dirname(__file__),'grid_original.png')
a=np.asarray(Image.open(src).convert('RGB')).astype(np.float32)
H,W,_=a.shape
# 바닥 타일 줄눈(grout) y 위치 찾기 (레인 사이 영역)
cols=np.r_[100:400, 650:950, 1100:1400]
prof=a[2600:3600][:,cols].mean(axis=(1,2))
g=[y for y in range(2,len(prof)-2) if prof[y]==prof[y-2:y+3].min() and prof[y]<np.convolve(prof,np.ones(41)/41,'same')[y]-2]
print('grout', [2600+y for y in g][:12])

B=a[2739:3451].copy()          # 7 타일 주기, 양끝 줄눈
T=a[1360:1540]                  # 목표 색조(1행 하단~2행 상단 물빛)
def rope_mask(x):
    r,g,b=x[...,0],x[...,1],x[...,2]
    purple=(b-g>55)&(b>150)
    white=(r>215)&(g>215)&(b>215)
    m=np.zeros(x.shape[:2],bool)
    for c0,c1 in [(975,1060),(1985,2070)]:
        m[:,c0:c1]=(purple|white)[:,c0:c1]
    return m
keep=np.ones(W,bool)
for c0,c1 in [(975,1060),(1985,2070)]: keep[c0:c1]=False
tm=T[:,keep].reshape(-1,3).mean(0); ts=T[:,keep].reshape(-1,3).std(0)
def normalize(x):
    out=x.copy()
    for y in range(x.shape[0]):
        row=x[y,keep]; m=row.mean(0); s=row.std(0)+1e-3
        out[y]=(x[y]-m)/s*ts+tm
    mk=rope_mask(x)
    out[mk]=x[mk]
    return np.clip(out,0,255)
Bn=normalize(B)
def strip(offset, hflip=False):
    seq=[]
    k=0
    while sum(s.shape[0] for s in seq) < offset+1350+10:
        seq.append(Bn if k%2==0 else Bn[::-1]); k+=1
    s=np.concatenate(seq,0)[offset:offset+1350]
    if hflip: s=s[:, ::-1]
    return s
import os
os.makedirs(__import__('os').path.join(__import__('os').path.dirname(__file__),'strips'),exist_ok=True)
for i,(off,hf) in enumerate([(120,False),(480,False),(300,False),(600,False),(200,False),(560,False),(40,False),(380,False),(660,False),(260,False),(520,False),
    # day12~18 (EP034~054): 위 줄(새 날) 아래끝이 아래 줄 위끝과 이어지도록 76px 간격 — 좌우 뒤집기 없음
    (596,False),(672,False),(748,False),(824,False),(900,False),(976,False),(1052,False)]):
    dst=__import__('os').path.join(__import__('os').path.dirname(__file__),f'strips/day{i+1}.png')
    if os.path.exists(dst): continue   # 이미 게시한 줄의 띠는 그대로 둔다
    s=strip(off,hf)
    s=np.pad(s,((0,0),(34,34),(0,0)),mode='reflect')
    Image.fromarray(s.astype(np.uint8)).save(__import__('os').path.join(__import__('os').path.dirname(__file__),f'strips/day{i+1}.png'))
# 미리보기: 원본 1행 + day1 + 원본 2행 일부
o=a.astype(np.uint8)
d1=np.asarray(Image.open(__import__('os').path.join(__import__('os').path.dirname(__file__),'strips/day1.png')))[:,34:-34]
pv=np.concatenate([o[600:1350],d1,o[1350:2100]],0)
Image.fromarray(pv).resize((1012,int(pv.shape[0]/3))).save('/tmp/preview.png')
