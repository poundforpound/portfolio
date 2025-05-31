import React, { useRef } from 'react';
import { SectionTitle } from "../../../components/SectionTitle.ts";
import { Button } from "../../../components/Button.ts";
import { Container } from "../../../components/Container.ts";
import { S } from './Contacts_Styles.ts';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_30z4ptt', 'template_x90dc3g', form.current, {
                publicKey: 'GsKEgYgyWWtM2xohR',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current?.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field
                        required
                        placeholder={"Name"}
                        name={'user_name'}

                    />   <S.Field
                    required
                        placeholder={"Email"}
                        name={'email'}

                    />
                    <S.Field
                        required
                        placeholder={"Subject"}
                        name={'subject'}

                    />
                    <S.Field
                        required
                        as={'textarea'}
                        placeholder={"Message"}
                        name={'message'}

                    />
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

