import os

# Suppress oneDNN custom operations warning
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

# Suppress TensorFlow warnings about CPU instructions and other logs
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # 0 = all logs, 1 = INFO logs, 2 = WARNING logs, 3 = ERROR logs

import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import absl.logging

# Set absl logging to ERROR to suppress compilation warnings
absl.logging.set_verbosity(absl.logging.ERROR)

# Load the model
model = load_model('./vgg16_plantdoc.h5')  # Update this path to where you have saved the model

# Labels array
labels = [
    'Apple leaf', 'Apple rust leaf', 'Apple Scab Leaf', 'Bell_pepper leaf', 'Bell_pepper leaf spot', 'Blueberry leaf',
    'Cherry leaf', 'Corn Gray leaf spot', 'Corn leaf blight', 'Corn rust leaf', 'grape leaf', 'grape leaf black rot',
    'Peach leaf', 'Potato leaf early blight', 'Potato leaf late blight', 'Raspberry leaf', 'Soyabean leaf', 'Squash Powdery mildew leaf',
    'Strawberry leaf', 'Tomato Early blight leaf', 'Tomato leaf', 'Tomato leaf bacterial spot', 'Tomato leaf late blight', 
    'Tomato leaf mosaic virus', 'Tomato leaf yellow virus', 'Tomato mold leaf', 'Tomato Septoria leaf spot'
]

# Function to load, resize, and rescale the image
def load_and_preprocess_image(img_path, target_size=(256, 256)):  # Update target size to 256x256
    # Load the image
    img = image.load_img(img_path, target_size=target_size)
    # Convert the image to an array
    img_array = image.img_to_array(img)
    # Expand dimensions to match the expected input shape of the model
    img_array = np.expand_dims(img_array, axis=0)
    # Rescale the pixel values to the range [0, 1]
    img_array /= 255.0
    return img_array

# Path to the image you want to predict on
image_path = './assets/images/leaf.png'  # Update this path to your image file

# Load and preprocess the image
img_array = load_and_preprocess_image(image_path)

# Predict
predictions = model.predict(img_array)

# Get the predicted class index
predicted_class_index = np.argmax(predictions, axis=1)[0]

# Get the class name from the labels array
predicted_class_name = labels[predicted_class_index]

print(f'Predicted class: {predicted_class_name}')
