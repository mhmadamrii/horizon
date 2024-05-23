'use client';

export default function Debugger({
  transactions,
  account,
  value,
}: {
  transactions: any;
  account: any;
  value: any;
}) {
  console.log('account', account);
  console.log('value', value);
  return (
    <div>
      Some debugger
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rerum, doloremque. Cumque, eaque reprehenderit
        saepe quis deleniti inventore quisquam laborum
        assumenda, fugit, libero adipisci rem omnis
        accusamus modi laboriosam deserunt doloribus.
      </div>
    </div>
  );
}
