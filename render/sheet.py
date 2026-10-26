import sys,glob,math
from PIL import Image
# 에피소드 한 편의 슬라이드 전체(표지·제목·컷 4~10장)를 한 장으로 모아 보기
d=sys.argv[1]; fs=sorted(glob.glob(d+'/*.png'))
ims=[Image.open(f).resize((360,450)) for f in fs]
cols=4; rows=math.ceil(len(ims)/cols)
s=Image.new('RGB',(370*cols-10,460*rows-10),'white')
for i,im in enumerate(ims): s.paste(im,((i%cols)*370,(i//cols)*460))
s.save(sys.argv[2])
