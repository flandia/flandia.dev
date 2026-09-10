"use client";

import {
  Children,
  createContext,
  isValidElement,
  PropsWithChildren,
  use,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface ProjectCardPosition {
  id: string;
  beforeExpand: () => void;
}

const ProjectCardPositionContext = createContext<ProjectCardPosition | null>(
  null,
);

export function useProjectCardPosition() {
  return use(ProjectCardPositionContext);
}

export function ProjectCardCollection({ children }: PropsWithChildren) {
  const collectionRef = useRef<HTMLDivElement>(null);
  const focusAfterMove = useRef<HTMLElement | null>(null);
  const [order, setOrder] = useState<string[]>([]);
  const items = Children.toArray(children).map((child, index) => ({
    child,
    id: isValidElement(child) ? String(child.key) : String(index),
    index,
  }));
  const rank = (item: (typeof items)[number]) => {
    const position = order.indexOf(item.id);
    return position < 0 ? order.length + item.index : position;
  };
  items.sort((a, b) => rank(a) - rank(b));

  useLayoutEffect(() => {
    focusAfterMove.current?.focus({ preventScroll: true });
    focusAfterMove.current = null;
  }, [order]);

  function moveToRowStart(id: string) {
    const slots = Array.from(collectionRef.current?.children ?? []);
    const index = slots.findIndex(
      (slot) => slot.getAttribute("data-project-id") === id,
    );
    if (index < 0) return;

    // Read the existing row once, before either reordering or expanding it.
    const top = slots[index].getBoundingClientRect().top;
    const rowStart = slots.findIndex(
      (slot) => Math.abs(slot.getBoundingClientRect().top - top) < 1,
    );
    if (rowStart === index) return;

    const focused = document.activeElement;
    if (focused instanceof HTMLElement && slots[index].contains(focused)) {
      focusAfterMove.current = focused;
    }
    const nextOrder = slots.map(
      (slot) => slot.getAttribute("data-project-id")!,
    );
    nextOrder.splice(index, 1);
    nextOrder.splice(rowStart, 0, id);
    setOrder(nextOrder);
  }

  return (
    <div ref={collectionRef} className="project-cards -mx-3">
      {items.map(({ child, id }) => (
        <ProjectCardPositionContext
          key={id}
          value={{ id, beforeExpand: () => moveToRowStart(id) }}
        >
          {child}
        </ProjectCardPositionContext>
      ))}
    </div>
  );
}
