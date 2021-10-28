import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Button } from '../components/Button';
import { Footer, FooterCopyright } from '../components/Footer';
// import { auth } from '../firebaseInitl';
// import { EmailAuthProvider, User, UserCredential, signInWithEmailAndPassword } from 'firebase/auth';


const AuthCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: solid 2px #dedede;
  border-radius: 15px;
  min-height: 500px;
  padding: 15px;
  padding-top: 0;
  margin-top: 90px;
  background-color: white;
  max-width: 410px;
  width: 80%;

  margin-left: auto;
  margin-right: auto;


  @media screen and (max-width: 480px ) {
    width: 80%;
    min-height: 400px;
  }
`;

const AuthCardHeadings = styled.div`
  h1, p {
    font-weight: bold;
    text-align: center;
  }

  h1 {
    font-size: 2.7rem;
  }
`;

/*
const ErrorMessage = styled.p`
  color: #fc033d;
`;
*/

const Input = styled.input`
  appearance: none;
  background-color: transparent;
  background-image: none;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 0;
  color: inherit;
  font-family: inherit;
  font-size: 1em;
  font-weight: bold;
  padding: 0.4em 0.8em;
  width: 60%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: #e6e6e6;
  margin-top: 10px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.32);
    box-shadow: none;
    outline: none;
    border: solid 3px #3b79ff;
  }

  @media screen and (max-width: 480px ) {
    width: 80%;
  }
`;


const SKECredential = () => {

  /*
  const provider = new EmailAuthProvider();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const signInResult: UserCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const crrentUser: User = signInResult.user;
  };
  */

  return (
    <React.Fragment>
      <Navbar>SKE System</Navbar>
        <AuthCard>
          <AuthCardHeadings>
            <h1>Access Code</h1>
            <p>アクセスIDと認証コードを入力してください</p>
          </AuthCardHeadings>
          <Input placeholder="アクセスID"/>
          <Input placeholder="認証コード"/>
          <Button>認証</Button>
        </AuthCard>
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
}

export default SKECredential;
