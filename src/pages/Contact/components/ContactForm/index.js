import { Form, Input, Button } from "antd";
import { forwardRef, useImperativeHandle } from "react";
import { withTranslation } from "react-i18next";

import * as S from "./styles";

const Contact = forwardRef(({ handleSubmit, submitting }, ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    initialize() {
      if (form) {
        form.resetFields();
      }
    },
  }));

  return (
    <S.ContactContainer>
      <S.Contact>
        <Form
          form={form}
          onFinish={(values) => {
            handleSubmit(values);
          }}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input placeholder="Your Name" autoComplete={"off"} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "This input is not valid email",
              },
            ]}
          >
            <Input type="email" placeholder="Your Email" autoComplete={"off"} />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input.TextArea placeholder="Your Message" rows={8} maxLength={1500} autoComplete={"off"} />
          </Form.Item>
        </Form>
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Button
            type="primary"
            shape="round"
            size="large"
            loading={submitting}
            onClick={() => {
              form.submit();
            }}
            block
            style={{ fontSize: "1.3rem", height: 60, maxWidth: false }}
          >
            Book Now
          </Button>
        </div>
      </S.Contact>
    </S.ContactContainer>
  );
});

export default Contact;
