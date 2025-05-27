#include<stdio.h>
int bs(int arr[], int n, int start, int end, int key){
    int mid = (start-end)/2;
    while(end<=start){
        if(arr[mid] == key){
            return key;
        }
        if(arr[mid]<key){
            end = mid+1;
        }
        else{
            start = mid-1;
        }
    }
}
int main(){
    


    return 0;
}