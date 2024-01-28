import { useCallback } from 'react';
import { Subtitle, Title } from '../components';
import { Button, Modal, ModalAction, ModalContent } from '../theme/daisyui';
import { useToggle } from '../hooks';
import * as D from '../data';

export default function ModalTest() {
  const [open, toggleOpen] = useToggle(false);
  const onAccept = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]); // [] ???

  return (
    <section className="mt-4">
      <Title>ShowHideModal</Title>
      <div className="flex justify-center p-4">
        <Button className="btn-primary" onClick={toggleOpen}>
          open modal
        </Button>
      </div>
      <Modal open={open}>
        <ModalContent closeIconClassName="btn-primary btn-outline" onCloseIconClicked={toggleOpen}>
          <Subtitle>Modal</Subtitle>
          <p className="mt-4 text-justify">{D.randomParagraphs()}</p>
          <ModalAction>
            <Button className="w-24 normal-case btn-primary btn-sm" onClick={onAccept}>
              Accept
            </Button>
            <Button className="w-24 normal-case btn-sm" onClick={toggleOpen}>
              Close
            </Button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  );
}
