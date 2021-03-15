import React from 'react';
import PropTypes from 'prop-types';

import { Title, Typography } from '../../components/typography';

import { PaperIcon, PaperColumn } from '../../styles/stylesLanding';

const Paper = ({
  icon,
  columnTitle,
  description,
  knowledgeList,
  lastColumn,
}) => (
  <PaperColumn lastColumn={lastColumn}>
    <PaperIcon>{icon}</PaperIcon>
    <Title fontWeight={800}>{columnTitle}</Title>
    <Typography fontSize="0.85rem" textAlign="center">
      {description}
    </Typography>
    <Typography fontSize="0.85rem" textAlign="center" color="#1351a8">
      Languages & tools I&apos;ve learned and used:
    </Typography>
    <Typography fontSize="0.85rem" textAlign="center">
      {knowledgeList}
    </Typography>
  </PaperColumn>
);

Paper.propTypes = {
  icon: PropTypes.node.isRequired,
  columnTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  knowledgeList: PropTypes.string.isRequired,
  lastColumn: PropTypes.bool.isRequired,
};

export default Paper;
