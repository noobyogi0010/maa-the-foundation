from PIL import Image

for i in range(9, 13):
    # My image is a 200x374 jpeg that is 102kb large
    foo = Image.open(
        'D:\my-project\maa-the-foundation\src\\assets\images\orginal\\img{}.jpg'.format(str(i)))

    # downsize the image with an ANTIALIAS filter (gives the highest quality)
    # foo = foo.resize((160, 300), Image.ANTIALIAS)

    # The saved downsized image size is 24.8kb

    foo.save('D:\my-project\maa-the-foundation\src\\assets\images\\img{}.jpg'.format(str(i-1)), optimize=True,
             quality=35)  # The saved downsized image size is 22.9kb
