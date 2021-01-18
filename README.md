# Seporaty : React MVVM Plugin

## 개요

Seporaty는 React를 보다 편리하게 사용할 수 있도록 구조화한 MVVM 프레임워크입니다.  
오픈소스로 공유 되며 더 좋은 구조와 다양한 기능을 제공하고자 합니다.

Author : 정윤상 (Yunsang Jeong)  
Contributor (2021.01.18 기준) : 정윤상 (Yunsang Jeong)  


## 사용모듈

Language : TypeScript  
Framework : React  
Unit Test tool : Jest 


## Setting Structure
프로젝트를 생성한 후 Root또는 컴포넌트를 생성할 부모 컴포넌트에 다음과 같이 Model, ViewModel, View를 생성하여 사용합니다.  

    const Root: React.FC = () =>{
        //Model을 생성한 후 View Model에 주입.
        const basicModel: BasicModel = new BasicModel();
        const basicViewModel: BasicViewModel = new BasicViewModel(basicModel);

        return <div><p>React Start</p>
            <BasicComponent basicViewModel={basicViewModel}/>
        </div>
    }


## Custom Hooks

Seporaty에서 제공하는 재생성 Hook입니다.

### useSubscribe

ModelView 객체를 구독하여 해당 객체의 데이터가 변경되었을때 View를 업데이트 할 수 있도록 제작한 Hook입니다. React공식 가이드에서 제공하는 Custom Hook 제작 법을 기본으로 구현했습니다.

    const subscribe = useSubscibe(props.basicViewModel);

## Class

### Basic Model View

기본 ModelView 객체로 useSubscribe를 통해 구독할 수 있습니다. 구독된 Class는 데이터가 업데이트 될때 rerender함수를 이용하여 View를 업데이트할 수 있습니다.

    export class BasicViewModel extends ModelView {
        constructor(private basicModel : BasicModel){
            super();
        }

        setName(name: string){
            if(this.renderer != null){
                this.renderer();
            }

            this.basicModel.setName(`${name} (modified)`)
        }
        ...
    }

### Basic Model

기본 Model구조로 서버와 통신하는 추가 함수를 제공한다.

- useAPI : API를 쉽게 사용할 수 있도록 구조화한 추가 함수로 axios를 사용한다, (추후 fetch로 전환하여 독립 함수화 예정)  

    this.useAPI("http://localhost:8080", {}, REST.GET, (value: AxiosResponse) => {
        console.log(value.data);
    });

### Basic View

View클래스의 경우 extends Class를 제공하지 않는다. (추후 구조수정 및 확장기능 제공에 따라)  
다음의 예시와 같이 ViewModel을 prop으로 제공 받아 사용하며 ViewModel은 useSubscribe를 통해 구독한다.    

    const BasicComponent: React.FC<{ basicViewModel: BasicViewModel }> = (props) => {
        const subscribe = useSubscribe(props.basicViewModel);
        return (){}
    }


