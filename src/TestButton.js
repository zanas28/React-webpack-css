import React from 'react';
import { Layout, Button } from 'antd';
import styles from './styles.css';
// import './styles.css';

export default class HolaButton extends React.Component {
    
    onChange = () => {
        this.state.collapse = !this.state.collapse;
    }

    touching = () => {
        alert('Hello World');
    };

    handlePlus = () => {
        this.count++;
    }

    handleMinus =() => {
        this.count--;
    }

    render() {
        const { Header, Footer, Content } = Layout;

        return(
            <Layout>
                <Header style={{backgroundColor:'#E1F5FE'}}>
                    <div className={styles.header}>
                        <Button type="default">Blog</Button>
                        <Button type="default">Contact Us</Button>
                    </div>
                </Header>
                <Content style={{backgroundColor:'#FFFFFF'}}>
                    <p className={styles.myStyle}>Lorem ipsum laljflajlfjlajlfjlajljgkljlgjlajglladgllajdlgjlajdlgjl;adjg;lad<br/>
                        k;lak;fkl;adkl;fk;ladk;fk;adkfl;k;adlkg;ljkd;aljgl;jad;lgj;laljflajlfjlajlfjlajljgkljlgjlajglladgllajdlgjlajdlgjl
                        mladjlfjladjl;fjadl;jfl;daf
                        klmjadljkflajdfa
                        <br/>
                        kjakldjfkljadljfladjlfjldajfl
                        kljdalfjladjfldjaljflkadjlfjladjfljdalkjflkdjfkljdalkjflkajdlkfjlkad
                    </p>
                </Content>
                <Footer className='footer'>
                    <div style={{textAlign:'center'}}>
                        <p style={{fontWeight:'bold'}}>Copyright Freetime Inc</p>
                    </div>
                </Footer>
            </Layout>
        )
    }
}