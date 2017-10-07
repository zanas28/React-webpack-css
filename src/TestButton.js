import React from 'react';
import { Layout, Button, Carousel } from 'antd';
import styles from './styles.css';
// import './styles.css';

// Remember to using File loader to upload photo

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
                <Header style={{backgroundColor:'#37474F'}}>
                    <div className={styles.header}>
                        <Button type="default">Blog</Button>
                        <Button type="default">Contact Us</Button>
                    </div>
                </Header>
                <Content>
                    <h1>Freetime Books Store</h1>
                    <Carousel autoplay>
                        <div><img src={require('./images/book_1.jpg')} alt='books' style={{width:304,height:228}}></img></div>
                        <div><img src={require('./images/book_2.jpg')} style={{width:304,height:228}}></img></div>
                    </Carousel>
                </Content>
                <Footer className={styles.footer}>
                    <div style={{textAlign:'center'}}>
                        <p style={{fontWeight:'bold'}}>Copyright Freetime Inc</p>
                    </div>
                </Footer>
            </Layout>
        )
    }
}