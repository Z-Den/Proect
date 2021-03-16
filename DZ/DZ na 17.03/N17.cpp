#include <iostream>

using namespace std;

int main(){
    int a [4] = {7,13,17,19}, c = 0, sd = 0;
    
    for (int i = 25000; i <= 35000; i++){
        int j = 3, cdel = 0, x = i;
        while (j >= 0){
            if (i % a[j] == 0){
                cdel ++;
            }
            j--;
        }
        if (cdel == 2){
            c++;
            while (x != 0){
                int y = x % 10;
                sd += y;
                x /= 10;
            }
        }
    }
    
    cout << c << ' ' << sd;
}