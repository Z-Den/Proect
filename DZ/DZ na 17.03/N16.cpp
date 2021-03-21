#include <iostream>

using namespace std;

int f (int n){
    if (n > 25){
        return n * n + 4 * n +  3; 
    }
    if (n <= 25 && n % 3 == 0){
        return f(n + 1) + 2*f(n + 4);
    }
    if (n <= 25 && n % 3 != 0){
        return f(n + 2) + 3*f(n + 5);
    }
}

int main(){
    int c = 0;
    for (int i = 1; i <= 1000; i++){
        int ds = 0, x = f(i);
        while (x != 0){
            int y = x % 10;
            ds += y;
            x /= 10;
        }
        if (ds == 24){
            c++;
        }
    }
    
    cout << c;
}