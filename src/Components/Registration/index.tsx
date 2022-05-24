import React from "react";
import { Form, Input, Button, Card } from "antd";
import { useMutation } from "@apollo/client";
import authMutation from "../../gql/Mutation";
import { registrationSchema } from "../../Helper/Schema/registrationSchema";

const yupSync = {
  async validator({ field }: any, value: any) {
    console.log("field,", field);

    registrationSchema.validateSyncAt(field, { [field]: value });
  },
};
function Registration() {
  const [createUser] = useMutation(authMutation.CREATE_USER_MUTATION);

  const onFinish = (values: object) => {
    createUser({ variables: values });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form site-card-border-less-wrapper">
      <Card>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Username" name="username" rules={[yupSync]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[yupSync]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[yupSync]}>
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Registration;
