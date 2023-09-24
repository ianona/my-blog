import React from 'react';

export default function Container(props: { children: React.ReactNode, readonly title: string }) {
  const { children, title } = props;
  return (
    <section className="flex flex-col gap-4 w-11/12 lg:w-8/12 mx-auto mt-8">
      <h1 className="text-4xl font-normal">{title}</h1>
      <hr />
      <div>{children}</div>
    </section>
  );
}