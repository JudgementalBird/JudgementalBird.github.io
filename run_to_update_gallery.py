import os
import sys

# luh guh
script_directory = os.path.dirname(os.path.abspath(sys.argv[0]))
os.chdir(script_directory)

# Directory containing the images
directory = "./images"

# Path to the JavaScript file
js_file_path = "script.js"

# List to hold the image file names
image_files = []

# Loop through files in the directory
for file in os.listdir(directory):
    # Check if the file is a jpg or png
    if file.endswith(".jpg") or file.endswith(".png"):
        # Add the file to the list, prefixed with the directory
        image_files.append(f"'images/{file}'")

# Format the list as a JavaScript array line
js_array_line = f"const images = [{', '.join(image_files)}];"

# Read the content of the JavaScript file and replace the target line
new_js_content = []
with open(js_file_path, 'r') as file:
    for line in file:
        # Check if this line contains the images array declaration
        if line.strip().startswith("const images = ["):
            # Replace it with the new JS array line
            new_js_content.append(js_array_line + "\n")
        else:
            # Keep the line as is
            new_js_content.append(line)

# Write the modified content back to the JavaScript file
with open(js_file_path, 'w') as file:
    file.writelines(new_js_content)

print("The script.js file has been updated.")
input("press enter to exit.")
