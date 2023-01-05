// Import useNavigate..
import { useNavigate } from "react-router-dom";

// Import Styled Components..
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

// Category Item Component..
const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  // Navigation..
  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate(route);
  };

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

// Export Category Item Component..
export default DirectoryItem;
