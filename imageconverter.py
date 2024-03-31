import os
import imageio

def convert_images_to_png(source_folder):
    # Define the image formats to convert
    formats_to_convert = ['.webp', '.jpg']

    # Check each file in the directory
    for filename in os.listdir(source_folder):
        # Extract the file extension
        name, extension = os.path.splitext(filename)
        
        # Check if the file is in the target formats
        if extension.lower() in formats_to_convert:
            # Construct full file path
            file_path = os.path.join(source_folder, filename)
            
            # Read the image
            img = imageio.imread(file_path)
            
            # Construct the new filename with a .png extension
            new_filename = name + '.png'
            new_file_path = os.path.join(source_folder, new_filename)
            
            # Save the image in PNG format
            imageio.imwrite(new_file_path, img)
            print(f"Converted '{filename}' to '{new_filename}'.")

# Replace 'your_folder_path' with the path to your folder containing images
source_folder = '.\images'
convert_images_to_png(source_folder)
