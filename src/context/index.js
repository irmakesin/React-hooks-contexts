import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {

  return (
  <StateContext.Provider value={useReducer(reducer, initialState)}> {/* useReducer returns the state and a dispatch function to update state */}
    {children}
  </StateContext.Provider>
  )
};

StateProvider.propTypes = {
  /**
   * @return {React.Node}
   */
  children: PropTypes.node.isRequired,

  /**
   * @desc Initial state value.
   */
  initialState: PropTypes.shape({}).isRequired,

  /**
   * @desc The reducer's state & actions update to context's data. 
   * @param {object} state
   * @param {object} action
   */
  reducer: PropTypes.func.isRequired
};

export const useStateFromContext = () => useContext(StateContext);