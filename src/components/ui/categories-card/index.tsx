import './style.scss'


interface CategoriesCardProps {
  image: React.ReactNode; // ReactNode is the type for any JSX element
  title: string;
}

export const CategoriesCard: React.FC<CategoriesCardProps> = ({ image, title }) => {
  return (
    <div className="categories_card">
      <div className='categories_card--icon'>{image}</div>
      <p className="categories_card--title">{title}</p>
    </div>
  );
};
