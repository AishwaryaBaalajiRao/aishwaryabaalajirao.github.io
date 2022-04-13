import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chickfila',
  templateUrl: './chickfila.component.html',
  styleUrls: ['./chickfila.component.scss']
})
export class ChickfilaComponent implements OnInit {

  description = 'Market research conducted for Chick-fil-A using data analytics and visualization tool – Tableau. The focus is to provide recommendations for the US market, taking into consideration the current global political and economic factors that might affect Chick-fil-A’s business. We then use PESTLE analysis to determine an optimal foreign location for profitable expansion based on the data.';
  role1 = 'Took ownership and lead of the project from start through to the finish. Analysed the data given to us, brainstormed patterns in the data and created a visual dashboard to showcase the company’s performance based on 4P’s analysis (Product, Place, Price and Promotion) using Tableau.';
  role2 = 'As a project lead, I also delegated tasks to my team members, provided guidance, supervised communication and collaboration within the team for efficient completion of tasks. Conducted research on analysing and finding patterns in data to derive actionable insights.';
  goal = 'The main aim of the implemented dashboard is to identify two important things from the given data – ';
  goals = ['Internal Marketing Assessment – What is the value currently being provided by the company to its consumers? How can a marketing manager at Chick-fil-A redesign the 4Ps in order to enhance customer value perception?',
'External Marketing Assessment – How can the PESTLE framework be used to identify the next country or region that would be most promising as well as profitable for international expansion?'];
metrics = ['Created an intuitive dashboard using tableau to identify the 4Ps (Place, Product, Promotion and Price) for internal market assessment.',
'Conducted the external market research using PESTLE method and identified who is the most profitable customer to serve.',
'Place - Showcased the most profitable sales based on recent sales in the United States.',
'Promotion - Compared cost of advertising across various platforms like TV, Magazine and Social Media to identify the pain points.',
'Price - Compared the average unit price of a meal with other significant competitors like Wendy’s, McDonalds and Burger King.',
'Product - Product mapping by quantity and sales compared to competitors.',
'Identified the most profitable months for promotion based on the sales.',
'For international expansion, Australia was chosen.'];
takeaways = ['Learnt a new skill and software in the area of data analytics using Tableau.',
'Enhanced my skills in the data visualization aspect to build an aesthetic dashboard that is clean as well as efficient in the story it conveys to a user.',
'Researched about best practices while choosing a chart for data visualization that is not confusing to the user.',
'Learnt how to research about the business model and identify pain points for a business in terms of price, product offerings, cost of goods, etc. '];

  constructor() { }

  ngOnInit(): void {
  }

}
