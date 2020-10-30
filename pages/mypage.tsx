import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

interface IProps {
  name: string;
}

interface IState {
  compteur: number;
}

interface IButtonProps {
  text: string;
  onClick: (() => void) | undefined;
}

const MyButton: React.FC<IButtonProps> = ({ text, onClick }: IButtonProps) => {
  return (
    <button className={styles.card} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

class MyPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      compteur: 0,
    };
  }

  render(): React.ReactNode {
    const { compteur } = this.state;
    return (
      <div className={styles.container}>
        <Head>
          <title>My Page</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to My Page</h1>

          <p className={styles.description}>
            This is my first page created using <code>Next.js</code>
          </p>

          <div className={styles.grid}>
            <MyButton
              text="Décrementer"
              onClick={() => {
                this.setState({ compteur: compteur - 1 });
              }}
            />
            <MyButton
              text="Incrementer"
              onClick={() => {
                this.setState({ compteur: compteur + 1 });
              }}
            />
          </div>
          <p>Compteur: {compteur}</p>
        </main>

        <footer className={styles.footer}>
          <p>Created by Aziz</p>
        </footer>
      </div>
    );
  }
}

export default MyPage;

// const MyComponent: React.FC<IProps> = ({ name }: IProps) => {
//   return (
//     <div>
//       <h1>Hello {name} !</h1>
//     </div>
//   );
// };

// class MyApp extends React.Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = {
//       compteur: 0,
//     };
//   }

//   render(): React.ReactNode {
//     const { compteur } = this.state;
//     return (
//       <div className={styles.container}>
//         <MyComponent name="Aziz" />
//         <p className={styles.grid}>Compteur de clics: {compteur}</p>
//         <MyButton
//           text="Décrementer"
//           onClick={() => {
//             this.setState({ compteur: compteur - 1 });
//           }}
//         />
//         <MyButton
//           text="Incrementer"
//           onClick={() => {
//             this.setState({ compteur: compteur + 1 });
//           }}
//         />
//       </div>
//     );
//   }
// }
