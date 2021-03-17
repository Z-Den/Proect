#include <iostream>

using namespace std;

int main(){
    int a[60] = {0};
    a[5] = 1;
    for (int i = 5; i <= 8; i++){
        if (i > 5){
            a[i] += a[i - 1];
        }
        if (i % 2 == 0){
            a[i] += a[i / 2];
        }
    }
    for (int i = 8; i <= 60; i++){
        if (i == 22){
            a[i] = 0;
        }
        if (i > 8){
            a[i] += a[i - 1];
        }
        if (i % 2 == 0 && i / 2 >= 8){
            a[i] += a[i / 2];
        }
    }
    
    cout << a[60];
}