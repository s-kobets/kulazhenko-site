import React from 'react';
import { useForm } from 'react-hook-form';
import { Flex } from '@semcore/flex-box';
import Tooltip from '@semcore/tooltip';
import Input from '@semcore/input';
import Button from '@semcore/button';
import Textarea from '@semcore/textarea';
import { Text } from '@semcore/typography';

const Form = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
    shouldFocusError: false,
  });

  const onSubmit = (data, e) => {
    reset({ email: '', name: '', trable: '' });
    alert(JSON.stringify(data));
  };

  console.log(123, errors);

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
          action=""
          mt={5}
          w="600px"
          direction="column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Text size={300} tag="label" mt={5} mb={1} htmlFor="email">
            E-mail или телефон
          </Text>

          <Tooltip
            size="xl"
            interaction={errors['email'] ? 'focus' : 'none'}
            placement="right"
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
