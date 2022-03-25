import styled from "styled-components";

export const TodoBody = styled.main`
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  margin-top: 24px;
  background-color: #eeedde;
  border-radius: 4px;
`;

export const TodoFormBody = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TodoFormInput = styled.input`
  flex-grow: 1;
  padding: 12px 16px;
  border-radius: 4px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: #203239;
  margin-right: 16px;

  &:focus {
    outline: none;
  }
`;

export const TodoFormButton = styled.button`
  padding: 12px 26px;
  border-radius: 4px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: #141e27;
  color: #ffffff;
  cursor: pointer;
`;

export const TodoListBody = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 12px 16px;
  margin: 4px 0;
  background-color: #203239;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemButtons = styled.div`
  display: flex;
  align-items: center;

  & button {
    padding: 6px;
    border-radius: 4px;
    color: #141e27;
    background-color: #eeedde;
    border: none;
    margin: 0 4px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
`;
