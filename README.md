# TC.Website

## Design
The website is built from simple Razor Web Pages. Most of the content is found in the [TC.Website/Views/Components](https://github.com/gothandy/TC.Website/tree/master/TC.Website/Views/Components) with one [Layout](https://github.com/gothandy/TC.Website/blob/master/TC.Website/Views/Layout.cshtml) page.

Bootstrap is used for the basic page structure and responsive elements of the pages.

## NuGet
All external dependencies added via NuGet. See [packages.config](https://github.com/gothandy/TC.Website/blob/master/TC.Website/packages.config) for details.

## Continuous Deployment
Commits pushed to the Master Branch will be published to an Azure deployment slot called [Stage](http://tc-website-html-stage.azurewebsites.net/).

From there use the Azure portal to swap the Stage deployment slot into Production.
