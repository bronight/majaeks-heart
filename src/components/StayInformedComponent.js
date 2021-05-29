import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Input, Button } from 'reactstrap';

const StayInformedForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => { console.log(data); };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
                <div className="input-group">
                    <FormGroup>
                        <Input type="email" id="email" {...register('email', {
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: 'Email is not valid.'
                                }
                            })} placeholder="Sign up for updates"/>
                    </FormGroup>
                    <span className="input-group-btn">
                        <Button color="danger" className="ml-2 center-informed button"><i class="fa fa-envelope"></i></Button>
                    </span>
                </div>
            </div>
        </Form>
    );
};

export default StayInformedForm;