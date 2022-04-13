import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodrecognition',
  templateUrl: './foodrecognition.component.html',
  styleUrls: ['./foodrecognition.component.scss']
})
export class FoodrecognitionComponent implements OnInit {

  description = 'An ML-powered product food recognition from an input image and estimate calories. The product can recognize the food item from an image fed to it based on color, shape, and texture, determine average weight of the item, and estimate the calories.';
  role1 = 'As the project team leader, I worked with a group of two other classmates to take this product from an idea to a successful final year thesis project during our undergraduate studies (A+ Grade). I conducted research, delegated tasks, data cleaning processes, coded the machine learning models (AlexNet and ResNet-50) for food recognition, color feature extraction using histogram gradient, managed deadlines, and created phase wise reports & presentations.';
  role2 = 'As team lead, I also had additional responsibilities to be on top of the deadlines, handle team conflicts efficiently, delegate tasks based on the strengths of individual team members and provide guidance and support.';
  product1 = 'The idea to develop this product came from the concept that – people are very conscious of their diet these days. Obesity has long been a problem in society and people are more aware than ever about what they eat and how much they eat. This is still a premature product that was developed based on my fundamental concepts of machine learning. The idea has a potential to become a full fledge product that could be on everyone’s smartphones to capture a picture of the food they are consuming and get an accurate calories estimation.';
  product2 = 'We took a sample dataset, Food-101 with 10,000 images as a training dataset for our machine learning models – AlexNet and ResNet-50. We then trained the two models on a separate test data which was self-created using consistent artificial lighting. Lastly, a regression model was used to estimate the calories based on the food identified by the model. The end user can feed any image from one of the categories the model is trained on to accurately get the food name as well as the average estimated calories.';
  metrics = ['Used color segmentation using K-means clustering to preprocess the food images before feeding it to the classifier.',
'Used convolutional neural networks (AlexNet and ResNet-50) and a k-nearest neighbor method for classifying the image.',
'Used multi-class linear regression analysis to predict the calories amount.',
'Each food category from the Food 101 dataset contains 800 training and 200 test images. The images have been rescaled to a unique size of 224x224 dimensions for the ResNet 50 architecture and 227x227 dimensions for the AlexNet architecture.',
'Test dataset was acquired (10 categories of fruits and vegetables) using an iPhone with uniform artificial lighting for consistency and rescaled to the above dimensions as well.',
'Image was recognized based on Color (Histogram Gradient), Shape (Hu Invariant) and Texture (GLCM) of the image fed to the classifier.',
'K-Nearest Neighbor gave an accuracy of 87.95%, AlexNet and ResNet-50 gave a 98.5% accuracy in recognizing the food from an image in our test dataset.'];
limits = ['Use of 3D feature extraction methods for better accuracy and results.', 'Use of grab-cut algorithm based on user interaction for better image segmentation process.',
'Increase test dataset to include all possible food categories.', 'Develop a more mature product by building a UI interface with camera capture features for broad and real-time use cases.'];
takeaways = ['As one of my very first dissertation project I have worked on, I could validate that I can work with new technologies with ease (e.g., ML, AI, MATLAB) and pick up new programming languages with great understanding.',
'How to initiate an idea into a working, although premature, product that could potentially be capitalized once refined.',
'How to manage, collaborate and delegate tasks within a team by creative methods.',
'How to clean the data and process it prior to feeding it to the machine learning model for image recognition purposes.',
'How to identify the right metrics for the machine learning models to select the best features that are sufficient and the most efficient to identify an image with a healthy accuracy.',
'I was able to pick up new programming technologies (MATLAB) and learn about how neural networks works and mimics the human brain to learn something new accurately using the supervised learning technique.',
'How different techniques from other disciplines can be used to strengthen the product development. This comes from the realization that; the product has the backend ML part which can be combined with a frontend UI component to make it a refined app-based product which users can utilize at restaurants or at home to lead a healthy life.'];

  constructor() { }

  ngOnInit(): void {
  }

}
