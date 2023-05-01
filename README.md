# VideoStreamHub

This is a simple side project built using Node.js and MongoDB GridFS that allows you to upload videos and photos and then view them on the web.
The project has a basic frontend interface that allows you to upload your files and display a link to view them.
I built this project to learn more about video buffering and streaming.

## Installation

To install the project, first clone the repository and navigate to the project directory. Then, install the necessary dependencies using npm:

```
git clone https://github.com/*Your-Username*/VideoStreamHub.git
cd videoStreamHub
npm install
```

## Configuration

Before running the project, you need to configure the MongoDB connection. You can do this by creating a `.env` file at the root of the project directory and
adding the following variables:

```
DB=<your-mongodb-uri>
```

Replace `<your-mongodb-uri>` with the URI for your MongoDB database.

## Running the Project

To run the project using nodemon, use the following command:

```
npm run start
```
This will start the server and make the project available at `http://localhost:8000`.

## Uploading Files

To upload a file, go to the homepage and click the "Browse" button. 
![image](https://user-images.githubusercontent.com/62201748/235534449-0b69d519-ccc3-4d2f-99c6-6f50fcd92d31.png)
Select the file you want to upload, and then click the "Upload" button. If the upload is successful, you will get an alert and  a link to view the file.
![image](https://user-images.githubusercontent.com/62201748/235534653-d9475535-0636-4934-965d-e1bcc02c61d2.png)


## Viewing Files

To view a file, click the link that appears after a successful upload. This will take you to a page where you can view the file in your browser.
![image](https://user-images.githubusercontent.com/62201748/235534664-172b057b-38d1-42e1-b3ef-39c9edfa0cb1.png)
## Conclusion

This is a simple project that demonstrates how to implement video streaming with Node.js and MongoDB GridFS. It provides a basic interface for uploading and viewing videos and photos. Feel free to use this project as a starting point for your own video streaming projects!
