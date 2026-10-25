import sys,glob,os
from PIL import Image
d=sys.argv[1]; fs=sorted(glob.glob(d+'/*.png'))
ims=[Image.open(f).resize((360,450)) for f in fs]
s=Image.new('RGB',(360*3+20,450*2+10),'white')
for i,im in enumerate(ims): s.paste(im,((i%3)*370,(i//3)*460))
s.save(sys.argv[2])
