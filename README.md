# Seporaty : React MVVM Plugin

## 개요

Seporaty는 React 프레임워크에서 편리하게 MVVM을 사용할 수 있도록 설계한 Structure 모듈입니다.  
오픈소스로 공유 되며 더 좋은 구조와 다양한 기능을 제공하고자 합니다.

Author : 정윤상 (Yunsang Jeong)  
Contributor (2021.01.18 기준) : 정윤상 (Yunsang Jeong)  


## 사용모듈

Language : TypeScript  
Framework : React  
Unit Test tool : Jest 

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



