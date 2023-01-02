import React, { useState } from 'react';
import Menu from './menu';
import Image from 'next/image'
import { Modal, message } from 'antd';
import Button from './button';
import { useForm } from "react-hook-form";
import axios from 'axios';


const Header = () => {

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const onSubmit = data => {
    axios.post(`https://challenge.webjar.ir/auth/login`, data)
      .then(res => { res?.data && setUserInfo(res.data); setIsModalOpen(false); }).catch(err => { message.error('نام کابری یا رمز عبور اشتباه است') })
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <div className="flex lg:flex-row xl:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse xs:flex-col-reverse mb-4 px-20 justify-between items-center w-full bg-white weblog-header">

        {userInfo !== null ?
          <div className="flex flex-row">
            <span className="text-green">{userInfo.fullName}</span>
          </div>
          : <Button borderColor="border-green" textColor="text-green" bgColor="bg-white" value="ورود" class="login-header-btn" onClick={showModal} />}
        <Menu />
        <Image
          src="/coding.png"
          alt="weblog Logo"
          width={82}
          height={82}
          priority
        />

      </div>

      <Modal weblog-header={{ fontFamily: 'iranyekan' }} width={990} title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <div className="flex flex-col justify-start items-center p-10 login-modal-container">
          <span className="text-[45px] mb-44">ورود به حساب کاربری</span>

          <form className="flex flex-col justify-center items-end group" onSubmit={handleSubmit(onSubmit)}>
            <span>نام کاربری </span>
            <div className="login-input flex justify-end items-center relative mt-1 mb-24">
              <input
                placeholder="نام کاربری خود را وارد کنید"
                className="login-input bg-white focus:border-green focus:outline-none text-right pr-44"
                {...register("userName", { required: true })}
                type="text"
                name="userName"
              />

              <img src="/user.svg" className="absolute ml-4 mr-18" alt="Search Icon" />

            </div>
            {errors.userName && <span className="text-red">این فیلد اجباری است</span>}
            <span> رمز عبور </span>
            <div className="login-input flex justify-end items-center relative mt-1 mb-24">
              <input
                placeholder="رمز عبور خود را وارد کنید"
                className="login-input bg-white focus:border-green focus:outline-none text-right pr-44"
                type="password"
                {...register("password", { required: true })}
                name="password"
              />

              <img src="/password.svg" className="absolute ml-4 mr-18" alt="Search Icon" />

            </div>
            {errors.password && <span className="text-red">این فیلد اجباری است</span>}
            <Button type="submit" value="ورود" textColor="text-white" bgColor="bg-green" class="mt-44" onClick={() => {
              {
                [
                  {
                    type: "manual",
                    name: "userName",

                  },
                  {
                    type: "manual",
                    name: "password",
                  }
                ].forEach(({ name }) =>
                  setError(name)
                );
              }
            }} />

          </form>

        </div>
      </Modal>
    </>

  );
}

export default Header;
