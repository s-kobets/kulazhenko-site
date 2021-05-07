import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useForm } from 'react-hook-form';
import { Flex } from '@semcore/flex-box';
import Tooltip from '@semcore/tooltip';
import Input from '@semcore/input';
import Button from '@semcore/button';
import Textarea from '@semcore/textarea';
import { Text } from '@semcore/typography';
import Breakpoints from '@semcore/breakpoints';

const Form = () => {
  const index = useContext(Breakpoints.Context);
  const data = useStaticQuery(graphql`
    query Form {
      site {
        siteMetadata {
          TELEGRAM_TOKEN
          TELEGRAM_CHAT_ID
        }
      }
    }
  `);
  const { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = data.site.siteMetadata;

  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
    shouldFocusError: false,
  });

  const onSubmit = async (data, e) => {
    reset({ email: '', name: '', trable: '' });
    // try {
    //   await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: JSON.stringify({
    //       chat_id: TELEGRAM_CHAT_ID,
    //       text: JSON.stringify(data),
    //     }),
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      <Flex
        id="contacts"
        className="container-x container-y"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text tag="h2" mt={10}>
          Отправить запрос и получить консультацию
        </Text>

        <Text size={500} mt={10}>
          Ваше обращение полностью конфиденциально
        </Text>

        <Flex
          tag="form"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          mt={5}
          wMax="600px"
          w="100%"
          wMin="320px"
          direction="column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <Text size={300} tag="label" mt={5} mb={1} htmlFor="email">
            E-mail или телефон
          </Text>

          <Tooltip
            size="xl"
            interaction={errors['email'] ? 'focus' : 'none'}
            placement={['right', 'top'][index]}
            theme="warning"
            title={errors['email']?.message}
            tag={Input}
            state={errors['email'] ? 'invalid' : 'normal'}
          >
            <Input.Value
              id="email"
              name="email"
              ref={register({ required: 'Enter e-mail or phone' })}
            />
          </Tooltip>

          <Text size={300} tag="label" mt={10} mb={1} htmlFor="name">
            Ваше имя
          </Text>
          <Input size="xl">
            <Input.Value name="name" id="name" ref={register} />
          </Input>

          <Text size={300} tag="label" mt={10} mb={1} htmlFor="trable">
            Ваша проблема
          </Text>
          <Textarea id="trable" name="trable" size="xl" ref={register} />
          <Button
            type="submit"
            size="xl"
            use="primary"
            theme="info"
            mt={10}
            w="100%"
          >
            Отправить
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Form;
