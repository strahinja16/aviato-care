
import React, { Fragment } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Label, List, Divider,
} from 'semantic-ui-react';

const Prescription = ({ prescription }) => (
  <List.Item>
    <Fragment>
      <Label as="a" color="teal" ribbon>
       Due {moment(prescription.dueDate).format('lll')}
      </Label>
      <Divider hidden />
      <Divider hidden />
      <List.Icon name="pills" /><strong>{prescription.drug}</strong> every <strong>{prescription.hours}h</strong>
      <Divider hidden />
      <List.Description>{prescription.note}</List.Description>
    </Fragment>
  </List.Item>
);

Prescription.propTypes = {
  prescription: PropTypes.shape({}).isRequired,
};

export default Prescription;
