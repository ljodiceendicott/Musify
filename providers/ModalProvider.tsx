"use client";

import Modal from "@/components/Modal";

import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal title="test Modal" description="Test" isOpen onChange={() => {}}>
        Test Children
      </Modal>
    </>
  );
};

export default ModalProvider;
