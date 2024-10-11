export const codeSnippet = `
//wrong example
const Book = ({ book }) => {
  return (
    <div>
      <img src={book.image} alt="Book image" />
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  );
};

//fixed
const Book = ({ title, image, children }: IBook) => {
  return (
    <div>
      <img src={image} />
      <p>{title}</p>
      {children}
    </div>
  );
};
`;
