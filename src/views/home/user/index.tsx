import * as React from 'react'
import './css/index.css'
import { inject, observer } from 'mobx-react'
// const { Option } = Select;
import ADDUser from '@/components/adduser/adduser'
import AddIdentity from '@/components/adduser/addIdentity'
import AddView from '@/components/adduser/addView'
import AddApiIdentity from '@/components/adduser/addApiIdentity'
import SetApiIdentity from '@/components/adduser/setApiIdentity'
import SetViewIdentity from '@/components/adduser/setViewIdentity'

interface Props {
    add: any
}

@inject('add')
@observer

class AddUser extends React.Component<Props>{
    state = {
        isShow: false,
        SfId: [],
        ApiType: [],
        ApiView: [],
        identity_text:'',
        userId:[],
    }
    componentDidMount() {
        this.getUserId();
    }
    
    getUserId = async () => {
        const { getIdentity,getUserId, getUserApiType, getUserApiView } = this.props.add;
        const result = await getIdentity();
        const resultId = await getUserId();
        const resultApiType = await getUserApiType();
        const resultApiView = await getUserApiView()

        this.setState({
            SfId: result,
            ApiType: resultApiType,
            ApiView: resultApiView,
            userId:resultId
        })
    }
    render() {
        let { SfId,ApiView,ApiType,userId } = this.state;
        return (
            <div>
                <h2 className="adduser-title">添加用户</h2>
                <div className="adduser-content">
                    <ADDUser Sfid={SfId} userId={userId} aDDuser={this.props.add}/>
                    <AddIdentity addIdentity={this.props.add}/>
                    <AddApiIdentity addApiIdentity={this.props.add}/>
                    <AddView Apiview={ApiView} addViewAuthor={this.props.add}/>
                    <SetApiIdentity Sfid={SfId} Apitype={ApiType} setApiViewAuthor={this.props.add}/>
                    <SetViewIdentity Sfid={SfId} Apiview={ApiView} setViewIdentity={this.props.add}/>
                </div>
            </div>
        )
    }
}

export default AddUser