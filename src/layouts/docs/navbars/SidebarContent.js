// import node module libraries
import { Link } from 'react-router-dom';
import { Fragment, useState } from "react";
import { ListGroup } from "react-bootstrap";

const SidebarContent = ({ data }) => {
  const [currentPath, setCurrentPath] = useState("#intro");

  const handleItemClick = (link) => {
    setCurrentPath(link);
  };

  const generateLinks = (items) => {
    return items?.map((item) => (
      <ListGroup.Item as="li" key={item.id}>
        {item.children ? (
          <Fragment>
            <Link
              to={item.link}
              className={currentPath === item.link ? "active" : ""}
              onClick={() => handleItemClick(item.link)}
            >
              {item.title}
            </Link>
            <ListGroup bsPrefix="list-unstyled" as="ul">
              {generateLinks(item.children)}
            </ListGroup>
          </Fragment>
        ) : (
          <Link
            to={item.link}
            className={currentPath === item.link ? "active" : ""}
            onClick={() => handleItemClick(item.link)}
          >
            {item.title}
          </Link>
        )}
      </ListGroup.Item>
    ));
  };

  return (
    <ListGroup bsPrefix="list-unstyled" as="ul">
      {generateLinks(data)}
    </ListGroup>
  );
};

export default SidebarContent;
