import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Max',
    text: 'Learning React is fun!'
  },
  {
    id: 'q2',
    author: 'Kevin',
    text: 'Learning React is great!'
  }
]

const QuoteDetail = () => {
  const params = useParams();
  
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <h1>Quote detail</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path='/quotes/:quoteId/comments'>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
