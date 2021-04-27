import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/39351781?v=4"
            alt="William Torres"
          />
          <div>
            <strong>tindev</strong>
            <p>Conecte-se com outros devs e dê match com eles!</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/39351781?v=4"
            alt="William Torres"
          />
          <div>
            <strong>github</strong>
            <p>
              Aplicativo para visualizar seu perfil no GitHub e realizar
              funcionalidades básicas
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/39351781?v=4"
            alt="William Torres"
          />
          <div>
            <strong>will-support-bot</strong>
            <p>A chat bot for my twitch channel</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/39351781?v=4"
            alt="William Torres"
          />
          <div>
            <strong>devradar</strong>
            <p>
              Ache devs em até 10km com interesse nas mesmas tecnologias que
              você.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/39351781?v=4"
            alt="William Torres"
          />
          <div>
            <strong>password-hasher</strong>
            <p>A password hasher made with NodeJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
