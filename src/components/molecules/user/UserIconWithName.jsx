import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { user } = props;
  return (
    <SContainer>
      <img height={160} width={160} src={user.image} alt={user.name} />
      <p>{user.name}</p>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
