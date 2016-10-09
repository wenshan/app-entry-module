import React from 'react';
import {Button} from 'antd';
import Logo from './Logo';
const ReactRouter = require('react-router');
import { Breadcrumb } from 'antd';

class Header extends React.Component {
    openWorkPage() {
        if (this.props.user && this.props.user.workUrl) {
            window.open(this.props.user.workUrl);
        }
    }

    render() {
        let src = 'https://work.alibaba-inc.com/photo/default.80x80.jpg';
        let name = 'unknow';
        if (this.props.user) {
            const user = this.props.user;
            if (user.avatar) {
                src = user.avatar;
            } else if (user.empId) {
                src = `https://work.alibaba-inc.com/photo/${user.empId}.80x80.jpg`;
            }

            if (user.name) {
                name = user.name;
            }
        }
        let bgStyle = {
            'backgroundImage': 'url(' + src + ')'
        };
        return (
          <header className="row header">
              <Breadcrumb routes={this.props.routes} params={{}}/>
              <div className="toolbox">
                  <Button type="ghost" onClick={() => {this.openWorkPage()}}>
                      <i className="anticon" style={bgStyle}></i>
                      {name}
                  </Button>
              </div>
          </header>
        )
    }
}

module.exports = {Toolbar: Header, Logo: Logo};