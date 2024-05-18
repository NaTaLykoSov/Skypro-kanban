import styled from 'styled-components';
export const topicStyles = {
  _purple: {
    backgroundColor: (props) => props.theme.backgroundPurple,
    color: (props) => props.theme.colorPurple,
  },
  _orange: {
    backgroundColor: (props) => props.theme.backgroundOrange,
    color: (props) => props.theme.colorOrange,
  },
  _green: {
    backgroundColor: (props) => props.theme.backgroundGreen,
    color: (props) => props.theme.colorGreen,
  },
  _gray: {
    backgroundColor: (props) => props.theme.backgroundGrey,
    color: (props) => props.theme.colorGrey,
  },
};