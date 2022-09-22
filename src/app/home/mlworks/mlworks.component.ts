import { Component, OnInit } from '@angular/core';
import {
  CarouselLibConfig,
  Image
} from '@ks89/angular-modal-gallery';
import * as AOS from "aos";

@Component({
  selector: 'app-mlworks',
  templateUrl: './mlworks.component.html',
  styleUrls: ['./mlworks.component.scss']
})
export class MlworksComponent implements OnInit {

  logos = ['../../../assets/icons/JupyterNB.png', '../../../assets/icons/plotly.png', '../../../assets/icons/python.png', '../../../assets/icons/seaborn.svg'];
  description = 'Project Goal & Objective: Develop marketing profiles by finding the key factors that determine an individual\’s income. UVW College wants to boost their enrollment. It plans to develop a new marketing campaign based on the profiles we provide.';
  role1 = 'My role in the project included analyzing the data, researching python visualization libraries (Plotly, Seaborn, Matplotlib, Geopandas, etc.). After conducting this research, several multivariate plots were created through a series of trial-and-error method by including at least 8 out of the 14 variables from the given dataset.'
  role2 = 'After plotting the multivariate visuals, the main strategy was to choose the 4 main plots that had the most relevance with respect to predicting an individual\'s income which would in-turn help UVW College to boost their enrollment for programs through effective marketing strategies.';
  metrics = ['Analyzed the data given to us using Visual Studio Code, to understand the 14 variables thoroughly from the 3 given tables.',
  'By the use of trial-and-error method, many sample multivariate plots were visualized using Jupyter Notebook and python libraries to identify any trends or patterns relating to the income of an individual.',
  'Researched on best possible visualizations to showcase the relations between the chosen 8 variables.',
  'Incorporated python visual libraries such as NumPy, Pandas, Plotly, MatPlotlib, and Seaborn to plot the graphs.',
  'Analyzed the top 4 graphs that showed the most promising relationship to predict the income of an individual and created an executive report.',
  'Concluded from the multivariate plots that Education Level, Age, Capital Gain, and Hours Worked per Week were the top factors required to predict the income of an individual; which would help in creating targeted marketing campaigns.'];
  takeaways = ['Learnt various python visual libraries to plot graphs like Numpy, Pandas, GeoPandas, Plotly, Seaborn, and MatPlotlib.',
  'Developed design thought process through research to find out what would be visually appealing and efficient to convey a story through data.',
  'Learnt an effective and accessible way to view and understand the trends, outliers, and patterns in a given dataset.',
  'Avoiding the temptation to use too many / too little attributes in a visual, to convey a clearer story.',
  'Ability to use data to make decisions and use visuals to explain the who, what, when, where, and how of data.',
  'The visuals created for this project is a "Decision Support" visual which helps business executives make data-based decisions.'];

// 'Learnt what to prioritize in a product lifecycle, for example, to cut the scope but not the quality of the product, metrics to account for to improve product visibility in the market and track product performance, etc.'

LIBCONFIG102: CarouselLibConfig = {
  carouselConfig: {
    maxWidth: '1200px',
    maxHeight: '600px',
    showArrows: true,
    objectFit: 'cover',
    keyboardEnable: true,
    modalGalleryEnable: true
  },
  carouselPreviewsConfig: {
    visible: false
  },
  carouselPlayConfig: {
    autoPlay: true,
    interval: 5000,
    pauseOnHover: true
  }
};

  imagesRect: Image[] = [
  new Image(
    0,
    {
      img:
        '/assets/images/PDF1.png',
      title: 'First image title',
      alt: 'First image alt',
      ariaLabel: 'First image aria-label'
    }
  ),
  new Image(
    1,
    {
      img:
        '/assets/images/PDF2.png'
    }
  ),
  new Image(
    2,
    {
      img:
        '/assets/images/PDF3.png',
      description: 'Description 3'
    }
  ),
  new Image(
    3,
    {
      img:
        '/assets/images/PDF4.png',
      title: 'Fourth image title (plain obj)',
      alt: 'Fourth image alt (plain obj)',
      ariaLabel: 'Fourth image aria-label (plain obj)'
    }
  ),
  new Image(
    4,
    {
      img:
        '/assets/images/PDF5.png'
    }
  ),
  new Image(
    5,
    {
      img:
        '/assets/images/PDF6.png'
    }
  )
];

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
