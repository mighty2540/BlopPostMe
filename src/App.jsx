
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import About from "./components/About";

import MyStore from "./blog";

function App (){

  return(
    <div>
      <Header title={MyStore.title} />

      <About image={MyStore.image} about={MyStore.about} />


      <ArticleList posts= {MyStore.articles} />

    </div>
  );
}

export default App;