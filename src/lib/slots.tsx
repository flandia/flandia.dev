import { Children, isValidElement, PropsWithChildren, ReactNode } from "react";

const SLOT_ID = Symbol("slot-id");

type SlotProps = PropsWithChildren<Record<string, unknown>>;

type SlotComponent = ((props: SlotProps) => null) & {
  [SLOT_ID]: symbol;
  displayName?: string;
};

type SlotMap = Map<symbol, SlotProps>;

const collectSlots = (children: ReactNode) => {
  const slots: SlotMap = new Map();

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      return;
    }

    const slotId = (child.type as SlotComponent)[SLOT_ID];
    if (!slotId) {
      return;
    }

    slots.set(slotId, child.props as SlotProps);
  });

  return slots;
};

export const createHost = (
  children: ReactNode,
  render: (slots: {
    getProps: (slot: SlotComponent) => SlotProps | undefined;
  }) => ReactNode,
) => {
  const slots = collectSlots(children);

  return render({
    getProps: (slot) => slots.get(slot[SLOT_ID]),
  });
};

export const createSlot = () => {
  const slotId = Symbol("slot");

  const Slot = (() => null) as unknown as SlotComponent;
  Slot[SLOT_ID] = slotId;

  return Slot;
};
