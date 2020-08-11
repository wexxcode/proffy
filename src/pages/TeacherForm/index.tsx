import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg'; 
import Textarea from '../../components/Textarea';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher esse formulário de inscrição"/>
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />

                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        options= {[
                            {value: 'Artes', label: 'Artes' },
                            {value: 'Matemática', label: 'Matemática' },
                            {value: 'Biologia', label: 'Biologia' },
                            {value: 'Física', label: 'Física' },
                            {value: 'Geografia', label: 'Geografia' },
                            {value: 'Português', label: 'Português' },
                        ]}
                    />
                    <Input name="cost" label="Custo da dua hora por aula" />

                </fieldset>
                <footer>
                    <p>
                        <img src={ warningIcon } alt="Aviso Importante" />
                        Importante!<br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
                
            </main>
        </div>
    );
}

export default TeacherForm;