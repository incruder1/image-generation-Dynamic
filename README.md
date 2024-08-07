# Dynamic Image Generation

Dynamic Image Generation is a web application that allows users to create custom images by providing a title, content, and an optional image upload. The application generates an Open Graph (OG) image that can be used for social media sharing.

## Features

- Create a custom title and content for the image.
- Upload a JPG or JPEG image to be included in the generated image.
- Automatically generates an OG image that can be downloaded.
- Responsive design for a seamless user experience.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Image Processing**: Canvas API
- **File Upload**: Express File Upload
- **Version Control**: Git

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/incruder1/dynamicImageGeneration.git
   cd dynamicImageGeneration
   ```
2. Install the backend dependencies:
``` bash
npm install
```
Install the frontend dependencies:
```bash
cd ../Client
npm install
```
Start the backend server:
```bash
node server.js
```
Start the frontend application:
```bash
cd ../frontend
npm start
```
### Open your browser and navigate to http://localhost:3000 to access the application.

- Enter a title and content for your image.
- Optionally, upload a JPG or JPEG image.
- Click the "Generate Image" button to create your custom image.
- Once the image is generated, you can download it by clicking the download link.
