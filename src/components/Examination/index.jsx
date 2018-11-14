
import React, { Fragment } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Label, List, Divider, Button,
} from 'semantic-ui-react';

const Examination = ({ examination, examinationFinished }) => {
  const today = moment().diff(examination.appointment, 'days');
  return (
    <List.Item>
      <Fragment>
        <Label as="a" color="orange" ribbon>
          Scheduled for {moment(examination.appointment).format('lll')}
        </Label>
        <Divider hidden />
        { today && !examination.showed
          ? (
            <Button
              basic
              color="orange"
              onClick={() => examinationFinished(examination.id)}
            >Examined ✓
            </Button>
          )
          : null }
        <Divider />
        <List.Description>{examination.note}</List.Description>
      </Fragment>
    </List.Item>
  );
};

Examination.propTypes = {
  examination: PropTypes.shape({}).isRequired,
  examinationFinished: PropTypes.func.isRequired,
};

export default Examination;
