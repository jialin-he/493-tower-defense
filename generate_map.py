from scipy.misc import imread, imsave
import numpy as np


canvas_w = 550
canvas_h = 550

canvas = np.zeros([canvas_w, canvas_h])

grid_w = 10
grid_h = 10



for i in range(canvas_w):
    for j in range(canvas_h):
        if i%(canvas_w//grid_w) == 0 or j%(canvas_h//grid_h) == 0:
            canvas[i][j] = 255


imsave("map.jpg", canvas)
